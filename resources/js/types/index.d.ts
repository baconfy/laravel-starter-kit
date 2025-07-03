import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;

    [key: string]: unknown;
}

export interface Breadcrumb {
    title: string;
    href?: string;
}

export interface User {
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
}
