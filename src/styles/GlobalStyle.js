import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${props => props.theme.fonts.primary};
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  /* 自定义滚动条 */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.primary};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.secondary};
  }

  /* 选择文本样式 */
  ::selection {
    background: ${props => props.theme.colors.primary};
    color: white;
  }

  /* 焦点样式 */
  *:focus {
    outline: 2px solid ${props => props.theme.colors.primary};
    outline-offset: 2px;
  }

  /* 链接样式 */
  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: ${props => props.theme.transitions.fast};
  }

  a:hover {
    color: ${props => props.theme.colors.secondary};
  }

  /* 按钮基础样式 */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    transition: ${props => props.theme.transitions.fast};
  }

  /* 图片样式 */
  img {
    max-width: 100%;
    height: auto;
  }

  /* 容器样式 */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${props => props.theme.spacing.md};
  }

  /* 动画类 */
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.6s ease-out;
  }

  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }

  /* 响应式设计 */
  @media (max-width: ${props => props.theme.breakpoints.md}) {
    .container {
      padding: 0 ${props => props.theme.spacing.sm};
    }
  }
`;
