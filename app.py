from flask import Flask, render_template, request, jsonify
import tensorflow as tf
import tensorflow_hub as hub

app = Flask(__name__)

loaded_model = tf.keras.models.load_model("./model/model_6.keras",
                                          custom_objects={'KerasLayer': hub.KerasLayer})

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/analyze', methods=['POST'])
def analyze():
    text = request.json.get('text', '')
    prediction = tf.squeeze(tf.round(loaded_model.predict([text])))
    # print(prediction)
    return jsonify({
        'is_disaster': bool(prediction)
    })

if __name__ == '__main__':
    app.run(debug=True) 