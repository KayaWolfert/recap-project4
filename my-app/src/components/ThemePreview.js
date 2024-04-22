import "./ThemePreview.css";

export default function ThemePreview({ theme }) {
  return (
    
      <article className="article-preview">
        {theme.colors.map((color) => {
          return (
            <div
              className="color-preview"
              style={{ backgroundColor: color.value }}
            >
              
            </div>
          );
        })}
      </article>
    
  );
}
