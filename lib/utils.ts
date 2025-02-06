"use client";

import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const validateToken = async (token:string) => {
  const response = await fetch('/api/verify-recaptcha', { 
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token }),
  })
  const data = await response.json();
  return data;
} 
