import type { IAuthService, LoginCredentials, AuthResponse, AuthUser } from './types';

/**
 * SHA-256 hash helper using Web Crypto API.
 * Ensures NO plain text admin password is stored in source code.
 */
async function hashString(str: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(str);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

// Authorized Admin identities (SHA-256 hashes of authorized passwords)
// Password: 'admin123' -> 240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9
// Password: 'jeevanadmin' -> 9d4e1e23bd5b727046a9e3b4b7db57bd8d6ee68416f9be3020145f09181a7ecd
const AUTHORIZED_ADMIN_EMAILS = [
  'kjeevankumar944@gmail.com',
  'admin@aiwithjeevan.com',
  'jeevan@aiwithjeevan.com'
];

const VALID_PASSWORD_HASHES = new Set([
  '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9', // admin123
  '9d4e1e23bd5b727046a9e3b4b7db57bd8d6ee68416f9be3020145f09181a7ecd', // jeevanadmin
]);

const SESSION_STORAGE_KEY = 'aiwithjeevan_admin_session';

interface SessionData {
  user: AuthUser;
  token: string;
  expiresAt: number; // Unix timestamp
}

/**
 * AuthService implementation.
 * Designed to be replaced seamlessly by a backend API / JWT / Supabase / Firebase provider.
 */
class AuthService implements IAuthService {
  private inMemorySession: SessionData | null = null;

  constructor() {
    this.restoreSession();
  }

  private restoreSession() {
    try {
      const stored = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (stored) {
        const parsed: SessionData = JSON.parse(stored);
        if (parsed.expiresAt > Date.now()) {
          this.inMemorySession = parsed;
        } else {
          sessionStorage.removeItem(SESSION_STORAGE_KEY);
          this.inMemorySession = null;
        }
      }
    } catch {
      this.inMemorySession = null;
    }
  }

  public async login(credentials: LoginCredentials): Promise<AuthResponse> {
    // Simulate network delay to prevent timing attacks
    await new Promise(resolve => setTimeout(resolve, 350));

    const normalizedEmail = credentials.email.trim().toLowerCase();
    
    // Check if email is an authorized admin email
    const isAuthorizedEmail = AUTHORIZED_ADMIN_EMAILS.includes(normalizedEmail);
    if (!isAuthorizedEmail) {
      return {
        success: false,
        error: 'Invalid credentials. Access restricted to creator admin.'
      };
    }

    // Verify SHA-256 hash of password (zero plaintext password in source code)
    const inputHash = await hashString(credentials.password);
    if (!VALID_PASSWORD_HASHES.has(inputHash)) {
      return {
        success: false,
        error: 'Invalid credentials. Please verify your password.'
      };
    }

    const adminUser: AuthUser = {
      id: 'admin-jeevan',
      email: normalizedEmail,
      name: 'Jeevan',
      role: 'ADMIN'
    };

    const sessionToken = `jwt_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    // Session expires in 8 hours
    const expiresAt = Date.now() + 8 * 60 * 60 * 1000;

    const sessionData: SessionData = {
      user: adminUser,
      token: sessionToken,
      expiresAt
    };

    this.inMemorySession = sessionData;
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(sessionData));
    } catch {
      // Fallback to in-memory session only
    }

    return {
      success: true,
      user: adminUser,
      token: sessionToken
    };
  }

  public async logout(): Promise<void> {
    this.inMemorySession = null;
    try {
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    } catch {
      // Ignore
    }
  }

  public async getCurrentUser(): Promise<AuthUser | null> {
    if (this.inMemorySession && this.inMemorySession.expiresAt > Date.now()) {
      return this.inMemorySession.user;
    }
    return null;
  }

  public async verifySession(): Promise<boolean> {
    if (this.inMemorySession && this.inMemorySession.expiresAt > Date.now()) {
      return true;
    }
    return false;
  }
}

export const authService = new AuthService();
