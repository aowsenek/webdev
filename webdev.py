from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def webdev():
   return render_template('webdevhome.html')

@app.route('/lab0')
def lab0():
   return render_template('lab0.html')

@app.route('/lab1')
def lab1():
   return render_template('lab1.html')

@app.route('/lab2')
def lab2():
   return render_template('lab2.html')

@app.route('/lab3')
def lab3():
   return render_template('lab3.html')

@app.route('/lab4')
def lab4():
   return render_template('lab4.html')

@app.route('/lab5')
def lab5():
   return render_template('lab5.html')

@app.route('/lab6')
def lab6():
   return render_template('lab6.html')

@app.route('/lab7')
def lab7():
   return render_template('lab7.html')

if __name__=='__main__':
   app.run(port=5010)
