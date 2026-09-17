import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

content = content.replace("15+", "3+")
content = content.replace("15 years", "3 years")

with open('src/App.tsx', 'w') as f:
    f.write(content)
