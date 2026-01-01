# Custom MDX Components Usage Guide

This guide shows how to use the custom components in your blog posts to replace dark code blocks.

## 1. FileTree Component

Use this for displaying directory structures.

### Before (code block):
```
Documents/
├── Finance/
│   ├── file1.pdf
│   ├── file2.pdf
├── Legal/
│   ├── file1.pdf
```

### After (FileTree component):
```mdx
<FileTree>
Documents/
├── Finance/
│   ├── file1.pdf
│   ├── file2.pdf
├── Legal/
│   ├── file1.pdf
</FileTree>
```

**Result**: Light background box with border, better readability

---

## 2. Markdown Tables

Use native markdown tables for tabular data.

### Example:
```markdown
| Subscription | Cost | Frequency | Next Bill | Cancellation Method |
|-------------|------|-----------|-----------|---------------------|
| Netflix | £12.99 | Monthly | 2025-03-15 | netflix.com/account |
| Spotify | £9.99 | Monthly | 2025-03-08 | spotify.com/account |
| NYT | £120 | Annual | 2025-06-01 | nytimes.com/myaccount |
```

**Result**: Properly styled HTML table with hover effects, light background

---

## 3. DataTable Component (Advanced)

For more complex tables with custom data.

### Usage:
```mdx
<DataTable
  caption="Subscription Tracking Example"
  headers={['Subscription', 'Cost', 'Frequency', 'Next Bill', 'Cancellation Method']}
  rows={[
    ['Netflix', '£12.99', 'Monthly', '2025-03-15', 'netflix.com/account'],
    ['Spotify', '£9.99', 'Monthly', '2025-03-08', 'spotify.com/account'],
    ['NYT', '£120', 'Annual', '2025-06-01', 'nytimes.com/myaccount'],
  ]}
/>
```

**Result**: Professional table with optional caption

---

## 4. SimpleList Component

Use this for structured lists that need special formatting.

### Before (code block):
```
WEEKLY STAPLES (Buy Every Week):
□ Fresh vegetables (seasonal)
□ Fresh fruit (seasonal)
□ Eggs
```

### After (SimpleList component):
```mdx
<SimpleList title="WEEKLY STAPLES (Buy Every Week)">
□ Fresh vegetables (seasonal)
□ Fresh fruit (seasonal)
□ Eggs
</SimpleList>
```

**Result**: Light gray background box with monospace font

---

## 5. Regular Code Blocks

Code blocks now have a light theme instead of dark.

### Usage:
```
Regular code blocks still work the same way,
but now they have a light gray background
instead of the dark background.
```

**Result**: Light gray background with dark text

---

## Migration Examples

### Example 1: Digital Filing System Post

**Replace this:**
```
Documents/
├── Finance/
│   ├── file1.pdf
│   ├── file2.pdf
```

**With this:**
```mdx
<FileTree>
Documents/
├── Finance/
│   ├── file1.pdf
│   ├── file2.pdf
</FileTree>
```

---

### Example 2: Subscription Tracking Post

**Replace this code block:**
```
| Subscription | Cost | Frequency | Next Bill | Cancellation Method |
```

**With markdown table:**
```markdown
| Subscription | Cost | Frequency | Next Bill | Cancellation Method |
|-------------|------|-----------|-----------|---------------------|
| Netflix | £12.99 | Monthly | 2025-03-15 | netflix.com/account |
```

---

### Example 3: Meal Planning Post

**Replace this code block:**
```
WEEKLY STAPLES (Buy Every Week):
□ Fresh vegetables (seasonal)
```

**With SimpleList:**
```mdx
<SimpleList title="WEEKLY STAPLES (Buy Every Week)">
□ Fresh vegetables (seasonal)
□ Fresh fruit (seasonal)
□ Eggs
</SimpleList>
```

---

## Quick Reference

| Use Case | Solution |
|---------|----------|
| Directory/file structures | `<FileTree>` component |
| Tables with data | Markdown tables or `<DataTable>` |
| Structured lists | `<SimpleList>` component |
| Actual code | Regular code blocks (now light themed) |

---

## Notes

- All components render with light backgrounds for better readability
- Markdown tables now have professional styling automatically
- Code blocks switched from dark (`bg-gray-900`) to light (`bg-gray-100`) theme
- All custom components support the same content but with better visual presentation
