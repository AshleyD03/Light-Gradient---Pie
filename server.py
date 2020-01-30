from flask import Flask, render_template, request, json
#from sense_hat import SenseHat
#sense = SenseHat()
app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/change", methods=["POST", "GET"])
def change():
    content = request.get_json()
    X = content["rgb"]
    #board = [X] * 50
    #sense.set_pixels(board)
    print("Light set to : " + str(X))
    return "End"
    
if __name__ == "__main__":
    app.run(debug=True)

# py server.py  