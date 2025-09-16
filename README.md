# Axis Ikashir

A modern, production-ready Next.js application built with TypeScript, Tailwind CSS, and best practices for scalable web development.

## 🚀 Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Authentication** with JWT tokens
- **Form validation** with Zod
- **Testing** with Jest and React Testing Library
- **Code quality** with ESLint and Prettier
- **Responsive design** with mobile-first approach
- **Component library** with Radix UI primitives
- **Environment validation** with Zod schemas

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Authentication**: NextAuth.js + JWT
- **Validation**: Zod
- **Testing**: Jest + React Testing Library
- **Database**: Prisma (ready for setup)
- **Code Quality**: ESLint + Prettier

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   └── admin/             # Admin pages
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   └── forms/            # Form components
├── lib/                  # Utility functions
├── types/                # TypeScript type definitions
├── constants/            # Application constants
├── config/               # Configuration files
├── hooks/                # Custom React hooks
├── utils/                # Utility functions
└── middleware.ts         # Next.js middleware
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd axis-ikashir
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp env.example .env.local
```

4. Update the environment variables in `.env.local` with your configuration.

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage
- `npm run type-check` - Run TypeScript type checking

## 🔐 Authentication

The application includes a complete authentication system with:

- User registration and login
- JWT token-based authentication
- Protected routes with middleware
- Password hashing with bcrypt
- Form validation with Zod

### Demo Credentials

- Email: `user@example.com`
- Password: `password`

## 🎨 Design System

The application uses a comprehensive design system with:

- **CSS Variables** for theming
- **Tailwind CSS** for utility-first styling
- **Radix UI** for accessible components
- **Dark mode** support
- **Responsive design** patterns

## 🧪 Testing

The project includes comprehensive testing setup:

- **Jest** for test runner
- **React Testing Library** for component testing
- **Coverage reporting** with thresholds
- **Mock configurations** for Next.js

Run tests:

```bash
npm run test
```

## 📦 Database Setup (Optional)

The project is ready for database integration with Prisma:

1. Set up your database URL in `.env.local`
2. Initialize Prisma:

```bash
npx prisma init
```

3. Generate Prisma client:

```bash
npx prisma generate
```

## 🚀 Deployment

The application is ready for deployment on:

- **Vercel** (recommended)
- **Netlify**
- **Railway**
- **Docker**

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy!

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Run the test suite
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you have any questions or need help, please:

1. Check the documentation
2. Search existing issues
3. Create a new issue with detailed information

---

Built with ❤️ using Next.js and modern web technologies.
