from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Mock database - in a real app, this would be SQLite or similar
appointments = []
messages = []

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/services')
def services():
    return render_template('services.html')

@app.route('/booking', methods=['GET', 'POST'])
def booking():
    if request.method == 'POST':
        data = request.json
        # Here you would typically save to a database and send an email
        appointments.append(data)
        return jsonify({"status": "success", "message": "Appointment request received. We will contact you shortly."})
    return render_template('booking.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        data = request.json
        messages.append(data)
        return jsonify({"status": "success", "message": "Message sent successfully."})
    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True, port=5001)
