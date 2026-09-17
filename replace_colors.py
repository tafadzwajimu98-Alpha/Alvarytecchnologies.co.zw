import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Replace zinc with blue for backgrounds to create the dark blue theme
content = content.replace('bg-zinc-950', 'bg-[#0A192F]')
content = content.replace('bg-zinc-900', 'bg-[#112240]')
content = content.replace('bg-zinc-800', 'bg-[#233554]')
content = content.replace('bg-zinc-700', 'bg-[#233554]')
content = content.replace('bg-zinc-100', 'bg-white')
content = content.replace('bg-zinc-300', 'bg-blue-100')

# Borders
content = content.replace('border-zinc-950', 'border-[#0A192F]')
content = content.replace('border-zinc-800', 'border-[#233554]')
content = content.replace('border-zinc-700', 'border-[#233554]')
content = content.replace('border-zinc-300', 'border-blue-100')
content = content.replace('border-zinc-200', 'border-blue-50')

# Text colors
content = content.replace('text-zinc-950', 'text-[#0A192F]')
content = content.replace('text-zinc-900', 'text-[#0A192F]')
content = content.replace('text-zinc-800', 'text-[#0A192F]')
content = content.replace('text-zinc-600', 'text-[#0A192F]')
content = content.replace('text-zinc-500', 'text-blue-200')
content = content.replace('text-zinc-400', 'text-blue-100')
content = content.replace('text-zinc-300', 'text-blue-50')
content = content.replace('text-zinc-100', 'text-white')

# Accent colors (was orange, now white/blue)
content = content.replace('bg-orange-600', 'bg-white text-[#0A192F]')
content = content.replace('bg-orange-500', 'bg-[#E6F1FF] text-[#0A192F]')
content = content.replace('text-orange-600', 'text-white')
content = content.replace('text-orange-500', 'text-white')
content = content.replace('text-orange-400', 'text-blue-100')
content = content.replace('border-orange-600', 'border-white')
content = content.replace('border-orange-500', 'border-white')
content = content.replace('border-orange-400', 'border-blue-100')
content = content.replace('fill-orange-500', 'fill-white')

# Specific fixes for buttons that became bg-white text-[#0A192F] but had existing text-white
content = content.replace('bg-white text-[#0A192F] text-white', 'bg-white text-[#0A192F]')
content = content.replace('bg-[#E6F1FF] text-[#0A192F] p-8', 'bg-[#112240] p-8 border border-[#233554]')
content = content.replace('bg-[#0A192F] text-white flex items-center', 'bg-white text-[#0A192F] flex items-center')
content = content.replace('bg-white text-[#0A192F] hover:bg-white text-[#0A192F]', 'bg-white text-[#0A192F]')

with open('src/App.tsx', 'w') as f:
    f.write(content)
