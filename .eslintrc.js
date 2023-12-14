/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-prettier/skip-formatting',
    'plugin:import/recommended'
  ],

  rules: {
    // allow async-await
    'generator-star-spacing': 'off', // 關閉 generator 函數中 * 的空格檢查

    // 允許無括號的箭頭函數
    'arrow-parens': 'off', // 關閉箭頭函數的參數括號檢查

    'one-var': 'off', // 關閉單個 var 宣告檢查 // 不用

    'no-void': 'off', // 允許使用 void 運算符 // 不用

    'multiline-ternary': 'off', // 關閉多行三元運算符檢查 // 不用

    'space-before-function-paren': ['error', 'never'], // 函數括號前禁止有空格  // 要用

    'no-trailing-spaces': 'off', // 關閉行尾空白檢查 // 不用

    'no-irregular-whitespace': 'off', // 關閉不規則空白檢查 // 不用

    'dot-notation': 'off', // 關閉物件屬性存取必須使用點號的檢查 // 不用

    'import/first': 'off', // 關閉導入語句必須在文件頂部的檢查 // 不用
    'import/named': 'off', // 要求命名的導入匹配導出的名稱  // 要用
    'import/namespace': 'off', // 確保導入的命名空間存在於導出的文件中 // 要用
    'import/default': 'off', // 確保默認導入匹配一個導出的默認值 // 要用
    'import/export': 'off', // 確保一個文件中的導入和導出不重複  // 要用
    'import/extensions': 'off', // 關閉導入文件必須帶文件擴展名的檢查 // 不用
    'import/no-unresolved': 'off', // 關閉未解析的導入檢查  // 不用
    'import/no-extraneous-dependencies': 'error', // 關閉禁止導入不在 package.json 依賴中的包的檢查 // 要用

    'prefer-promise-reject-errors': 'off', // 關閉 Promise 拒絕時必須返回 Error 的檢查 // 不用

    'vue/multi-word-component-names': 'error', // 關閉 Vue 組件名必須為多詞的檢查 // 要用
    'vue/no-reserved-component-names': 'off', // 關閉 Vue 組件名不能使用保留字的檢查 // 不用
    'vue/no-v-for-template-key': 'error', // 關閉 Vue 模板中 v-for 使用 key 的檢查 // 要用

    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
