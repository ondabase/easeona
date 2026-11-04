import antfu from "@antfu/eslint-config"

export default antfu(
  {
    type: "app",
    // Next.js + React
    react: true,
    nextjs: true,
    // Enable type-aware linting
    typescript: {
      tsconfigPath: "tsconfig.json",
      // Added on top of antfu's type-aware defaults
      overridesTypeAware: {
        "ts/no-unnecessary-condition": "error",
      },
    },
    // Formatting
    stylistic: {
      indent: 2,
      quotes: "double",
      semi: false,
      braceStyle: "1tbs",
    },
    // Respect .gitignore
    gitignore: true,
    // Additional generated files
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "coverage/**",
      "next-env.d.ts",
    ],
  },
  // General JavaScript / TypeScript rules
  {
    files: ["**/*.{js,jsx,ts,tsx,mjs,cjs,mts,cts}"],
    rules: {
      // Variables and functions
      "prefer-const": "error",
      "no-var": "error",
      "no-empty-function": "error",
      "no-unused-vars": "off",
      // Prevent unused imports
      "unused-imports/no-unused-imports": "error",
      // Prevent unnecessary expressions
      "no-constant-condition": "error",
      "no-debugger": "error",
      "no-unreachable": "error",
      "no-duplicate-imports": [
        "error",
        { allowSeparateTypeImports: true },
      ],
      // Require braces for control statements
      "curly": ["error", "all"],
      // No process usage
      "no-restricted-globals": [
        "error",
        {
          name: "process",
          message: "Do not use process directly.",
        },
      ],
      // Prevent explicit globalThis.process access
      "no-restricted-properties": [
        "error",
        {
          object: "globalThis",
          property: "process",
          message: "Do not access Node.js process.",
        },
      ],
      // Avoid console noise
      "no-console": [
        "warn",
        {
          allow: ["warn", "error"],
        },
      ],
      // Prefer strict comparisons
      "eqeqeq": ["error", "always"],
    },
  },
  // TypeScript-specific rules
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    rules: {
      // No explicit any
      "ts/no-explicit-any": "error",
      // Prefer type over interface
      "ts/consistent-type-definitions": [
        "error",
        "type",
      ],
      // Strict unused declarations
      "ts/no-unused-vars": [
        "error",
        {
          vars: "all",
          args: "all",
          caughtErrors: "all",
          varsIgnorePattern: "^$",
          argsIgnorePattern: "^$",
          caughtErrorsIgnorePattern: "^$",
        },
      ],
      // Type safety
      "ts/no-non-null-assertion": "error",
      "ts/no-empty-object-type": "error",
      "ts/no-unsafe-function-type": "error",
      "ts/no-wrapper-object-types": "error",
      // Empty functions (TS-aware variant)
      "no-empty-function": "off",
      "ts/no-empty-function": "error",
      // Consistent imports
      "ts/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports",
        },
      ],
      // Avoid TypeScript suppression
      "ts/ban-ts-comment": [
        "error",
        {
          "ts-ignore": true,
          "ts-nocheck": true,
          "ts-check": false,
          "ts-expect-error": "allow-with-description",
        },
      ],
      // Avoid unnecessary types
      "ts/no-inferrable-types": "error",
    },
  },
)
