import pyautogui
import time
from datetime import datetime

# 每 75 秒點一次
interval = 75
times = 0

start_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
print(f"開始於：{start_time}")
print(f"每隔 {interval} 秒按一下左鍵\n按 Ctrl+C 停止")

try:
    while True:
        pyautogui.click()  # 模擬滑鼠左鍵點擊
        time.sleep(2)  # 兩次點擊間隔 2 秒
        pyautogui.click()
        times += 1
        time.sleep(interval)
except KeyboardInterrupt:
    print("\n已手動停止")
    print("\n運行%d次" %times)