with open('src/App.tsx', 'r') as f:
    content = f.read()

content = content.replace(
    'src="https://images.unsplash.com/photo-1554308552-4415ad70e7e0?auto=format&fit=crop&q=80&w=800"', 
    'src="/src/assets/images/vehicle_tracking_dashboard_1789645419632.jpg"'
)

with open('src/App.tsx', 'w') as f:
    f.write(content)
