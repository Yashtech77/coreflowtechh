import { useTheme } from "../../context/ThemeContext";
import { cn } from "../../utils/cn";

export default function ThemeToggle({ className }) {
  const { theme, setTheme, themes } = useTheme();

  return (
    <div className={cn("flex items-center gap-1.5", className)} role="group" aria-label="Colour theme">
      {themes.map((item) => (
        <button
          key={item.id}
          type="button"
          title={item.name}
          aria-label={`Switch to ${item.name} theme`}
          aria-pressed={theme === item.id}
          onClick={() => setTheme(item.id)}
          className={cn(
            "h-7 w-7 shrink-0 rounded-full border transition sm:h-5 sm:w-5",
            theme === item.id
              ? "ring-2 ring-accent ring-offset-1 ring-offset-background sm:ring-offset-2"
              : "opacity-80 hover:opacity-100"
          )}
          style={{ background: `linear-gradient(135deg, ${item.primary}, ${item.accent})` }}
        />
      ))}
    </div>
  );
}
