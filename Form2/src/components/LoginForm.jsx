import React from 'react';
import logoJcsx from '../assets/logoJcsx.png';
import { InputField } from './InputField';
import { Button } from './Button';

export function LoginForm() {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: 'var(--background-color)' }}
    >
      <div className="max-w-[360px] overflow-hidden rounded-[20px] bg-white shadow-lg w-72">
        <div
          className="relative h-48 w-72"
          style={{ backgroundColor: 'var(--primary-color)' }}
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, gray 1px, transparent 0)`,
                backgroundSize: '12px 12px',
              }}
            />
          </div>
          <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
            <img src={logoJcsx} alt="Logo" />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 h-10 bg-white"
            style={{
              borderTopLeftRadius: '100px',
            }}
          />
        </div>
        <div className="px-8 pb-8 pt-4 h-96">
          <h1
            className="mb-6 text-xl font-semibold"
            style={{ color: 'var(--text-color)' }}
          >
            Login
          </h1>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-1"
                style={{ color: 'var(--text-color)' }}
              >
                Email
              </label>
              <div>
                <InputField id="email" type="email"/>
              </div>
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm mb-1"
                style={{ color: 'var(--text-color)' }}
              >
                Password
              </label>
              <div>
                <InputField id="password" type="password" />
              </div>
            </div>
           <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
