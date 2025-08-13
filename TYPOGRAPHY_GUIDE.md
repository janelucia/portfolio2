# Typography System

## Hierarchie nach UX/UI Standards

### Headings
- **H1 (Hero Title)**: `text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900`
- **H2 (Section Titles)**: `text-2xl md:text-3xl font-bold text-gray-900`
- **H3 (Card Titles)**: `text-xl font-semibold text-gray-900`
- **H4 (Subtitles)**: `text-lg font-semibold text-gray-900`

### Body Text
- **Large Body**: `text-lg md:text-xl leading-relaxed text-gray-600`
- **Regular Body**: `text-base leading-relaxed text-gray-600`
- **Small Body**: `text-sm text-gray-600`

### Special Text
- **Section Subtitles**: `text-sm font-semibold tracking-widest text-gray-500 uppercase`
- **Badges/Tags**: `text-sm font-medium text-gray-800`
- **Links**: `font-medium hover:text-primary transition-colors`
- **Buttons**: `font-medium text-white` (primary) or `font-medium text-gray-700` (secondary)

### Responsive Rules
- Mobile-first approach
- Use responsive text sizes (text-base md:text-lg)
- Maintain consistent line-height (leading-relaxed for body text)

### Color Consistency
- Primary text: `text-gray-900`
- Secondary text: `text-gray-600`
- Tertiary text: `text-gray-500`
- Interactive text: `text-primary` with `hover:text-accent`