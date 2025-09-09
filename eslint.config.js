
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import globals from "globals";
import prettier from "eslint-config-prettier";


export default tseslint.config(
  
  js.configs.recommended,

  
  ...tseslint.configs.recommended,


  {
    ignores: ["dist/**", "node_modules/**"],
  },

  {
    files: ["**/*.ts"],
    languageOptions: {
      
      sourceType: "module",
      ecmaVersion: "latest",
      globals: {
        ...globals.node,
        ...globals.jasmine, 
      },
    },
    rules: {
    
    },
  },


  prettier
);
