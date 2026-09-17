import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Make sure buttons have correct text colors
content = content.replace('bg-white text-[#0A192F] hover:bg-[#E6F1FF] text-[#0A192F] text-white', 'bg-white text-[#0A192F] hover:bg-[#E6F1FF]')
content = content.replace('bg-white text-[#0A192F] px-8 py-4 font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-3 rounded-sm', 'bg-white text-[#0A192F] hover:bg-gray-200 px-8 py-4 font-bold text-xs uppercase tracking-widest transition-colors flex items-center gap-3 rounded-sm')

# Make sure we don't have text-white text-[#0A192F] on the same element
content = re.sub(r'text-white\s+text-\[#0A192F\]', 'text-[#0A192F]', content)
content = re.sub(r'text-\[#0A192F\]\s+text-white', 'text-[#0A192F]', content)

with open('src/App.tsx', 'w') as f:
    f.write(content)
