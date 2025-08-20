import pyautogui
import os
import time
from datetime import datetime

terminal_width = os.get_terminal_size().columns #terminal寬度
width, height = pyautogui.size()
interval = 60 #執行間隔
times = 0 #紀錄次數

#開始時間
start_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
print(f"開始於：{start_time}")
print(f"每隔 {interval} 秒滑動滑鼠 \n 按 Ctrl+C 停止")

try:
    while True:
        pyautogui.moveTo(1,1)  
        pyautogui.moveTo( width-1 , height-1 , duration=1.5)
        times += 1
        time.sleep(interval)
except KeyboardInterrupt:
    print("-" * terminal_width)
    print("已手動停止","運行 %d 次" %times)