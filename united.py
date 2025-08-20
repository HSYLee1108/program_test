import pyautogui as pi
import tkinter as tk
from tkinter.constants import CENTER

def botton_1_cmd():
    print("clicked")

width, height = pi.size()
widthxheight = str(width//2) + "x" + str(height//2)
win = tk.Tk()
win.title("test")
win.geometry(widthxheight)
win.resizable(1,1)

label_1 = tk.Label(win,text="hell yah")
label_1.pack(anchor=CENTER)

button_1 = tk.Button(win, text="按鈕",command=botton_1_cmd)
button_1.pack(anchor=CENTER)

test = tk.Entry(show="*")
test.pack()

Check = tk.Checkbutton(text="這是啟用的勾選框",state="normal")
Check.pack()

radioVar = tk.IntVar()
radio1 = tk.Radiobutton(text='Button1',variable=radioVar, value=1) 
radio2 = tk.Radiobutton(text='Button2',variable=radioVar, value=2) 
radio3 = tk.Radiobutton(text='Button3',variable=radioVar, value=3)
radio1.place(x=40,y=25)
radio2.place(x=140,y=25)
radio3.place(x=240,y=25)

win.mainloop()