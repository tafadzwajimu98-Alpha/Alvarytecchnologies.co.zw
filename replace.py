import re

with open('src/App.tsx', 'r') as f:
    content = f.read()

# Replace Fuel Monitoring image
content = content.replace(
    'src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800"', 
    'src="/src/assets/images/fuel_ultrasonic_sensor_installation_1789645375285.jpg"'
)

# Add Central Locks and Alarms to Security Systems
content = content.replace(
    '["Real-time security alerts", "Remote immobilization", "Driver identification tags"]',
    '["Real-time security alerts", "Remote immobilization", "Central locks and alarms", "Driver identification tags"]'
)

# Remove "Designed and Developed by"
content = re.sub(r'<p>Designed and Developed by <span className="text-blue-400 font-bold">Blacklemur Innovations</span></p>', '', content)

with open('src/App.tsx', 'w') as f:
    f.write(content)
