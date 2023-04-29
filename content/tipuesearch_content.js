var tipuesearch = {"pages": [{'title': 'About', 'text': '大家好，我們是2a2第11組 \n 我是41023130 林奇川 【川神】\xa0 \n 41023142\xa0 姜陳昊 \n 還有2位隊員 \n 網站倉儲: https://github.com/mdecd2023/2a2-pj2ag11 \xa0 \n 網站網頁: https://mdecd2023.github.io/2a2-pj2ag11/ \xa0 \n https://mde.tw/pjcopsim \xa0 \n <<<<<<< HEAD \n', 'tags': '', 'url': 'About.html'}, {'title': 'ChatGPT', 'text': '這個程式很好用的 \n 網址: https://openai.com/blog/chatgpt \n', 'tags': '', 'url': 'ChatGPT.html'}, {'title': '如何使用指令將YT影片顯示在倉儲', 'text': '指令 \n <iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allowfullscreen></iframe> \n \n 這裡的 VIDEO_ID要替換為實際的 YouTube 影片 ID。 \n 這個 YouTube 影片 ID 是指一個由11個字元（由數字和字母組成）的獨特識別碼，用於唯一標識一個 YouTube 影片。 \n https://www.youtube.com/watch?v=xxxxxxxxxxx \xa0 其中的 xxxxxxxxxxx 是該影片的 ID。', 'tags': '', 'url': '如何使用指令將YT影片顯示在倉儲.html'}, {'title': 'Reflection', 'text': '41023142 姜陳昊: 在兩人一組時候，前面很認真，但後來遇到一些問題，我不能acp，後來我選擇逃避擺爛。 現在四人一組，也算從心來過，我遇到問題有去詢問41023119，他幫了我很多，原本acp不了的問題也解決了，也知道什麼時候需要git pull，雖然這些事情早該在第一次分組就學會，之後的每一天我會加把勁的。', 'tags': '', 'url': 'Reflection.html'}, {'title': 'tutoria1', 'text': '1.球體碰撞 \n \n 2.探測車 \n \n 3.探測車進化版 \n \n 3.模擬影片 \n', 'tags': '', 'url': 'tutoria1.html'}, {'title': 'w10-1', 'text': '======= \n', 'tags': '', 'url': 'w10-1.html'}, {'title': 'pj1', 'text': 'pj1ag9 \n', 'tags': '', 'url': 'pj1.html'}, {'title': 'w10-2', 'text': ">>>>>>> 6072da9df1d600606cc816365ce695c3b4fbf24b \n 有關 CoppeliaSim zmqRemoteAPI 問題 \n \n \n \n What is zmqRemoteAPI, and how does it relate to CoppeliaSim? \n How do you establish a connection between a Python script and CoppeliaSim using zmqRemoteAPI? \n What are some common use cases for zmqRemoteAPI in CoppeliaSim? \n What are the advantages and disadvantages of using zmqRemoteAPI compared to other methods of communication between Python and CoppeliaSim? \n Can you give an example of a project or task that you could complete using zmqRemoteAPI in CoppeliaSim? \n \n 41023130>1. \n A: zmqRemoteAPI \xa0 是 \xa0 CoppeliaSim \xa0 提供的一個用於遠端控制仿真場景的工具，使用 \xa0 zmqRemoteAPI，能透過編程去控制CoppeliaSim中的機器人、傳感器等等，讓我們實現遠端控制及自動化操作，達到便利的效果。 \n 41023130>2. \n A: 在 \xa0 CoppeliaSim \xa0 模擬環境中，添加一個 \xa0 Remote \xa0 API \xa0 Server \xa0 對象，並設定相應的通訊端口。 在 \xa0 Python \xa0 程式中，使用 \xa0 zmqRemoteAPI \xa0 提供的函式（例如 \xa0 simxStart、simxFinish、simxGetConnectionId \xa0 等）建立與 \xa0 CoppeliaSim \xa0 的連接，並設定適當的連接參數。 \n 41023130>3. \n A: zmqRemoteAPI \xa0 在 \xa0 CoppeliaSim \xa0 中的一些常見使用案例： \n 控制機器人：使用 \xa0 zmqRemoteAPI \xa0 可以通過 \xa0 Python \xa0 程式控制 \xa0 CoppeliaSim \xa0 中的機器人模型，例如移動機器人、控制關節運動、設定感測器等。 \n 场景设置：使用 \xa0 zmqRemoteAPI \xa0 可以自動化設置 \xa0 CoppeliaSim \xa0 中的場景，例如添加物體、設定物體的位置和屬性、設置環境條件等。 \n 效能測試：使用 \xa0 zmqRemoteAPI \xa0 可以進行性能測試和評估，例如測試控制算法的運行速度、記憶體使用等。 \n 資料收集：使用 \xa0 zmqRemoteAPI \xa0 可以從 \xa0 CoppeliaSim \xa0 中獲取模擬環境中的資料，例如感測器數值、物體位置、碰撞狀態等，並用於後續的資料分析和處理。 \n 教育和研究：使用 \xa0 zmqRemoteAPI \xa0 可以在教育和研究領域中進行虛擬實驗、模擬場景等，幫助學生和研究人員學習和研究機器人相關的知識和技能。 \n 簡而言之，zmqRemoteAPI \xa0 在 \xa0 CoppeliaSim \xa0 中常見的使用案例包括機器人控制、場景設置、效能測試、資料收集和教育研究等領域。 \n \n 41023130>4. \n \n A:優點：共有3點，跨平台、高效、方便使用。 \n 1. zmqRemoteAPI基於ZeroMQ庫實現，支持跨平台通信，因此可以輕鬆地在Windows、Mac和Linux等操作系統上使用。 \n 2. zmqRemoteAPI的通信速度非常快，比其他通信方法如socket和pipe等更加高效，這對於需要快速傳輸大量數據的應用場景非常有利。 \n 3. 使用zmqRemoteAPI進行通信非常簡單，只需要在Python腳本中導入相關庫，創建一個ZeroMQ套接字並與CoppeliaSim建立連接即可。 設置靈活：zmqRemoteAPI的設置非常靈活，可以根據需要對其進行自定義設置，例如可以設置超時時間、心跳機制等。 \n 缺點:依賴褲太多，導致在使用前，需要安裝許多的東西，變得複雜 \n 還有，需要得到 CoppeliaSim \xa0的支持,因此需要許多相應設置。 \n \n 41023130>5. \n \n A:下面的程式碼是使用 \xa0 CoppeliaSim \xa0 的 \xa0 zmqRemoteAPI \xa0 控制機械臂自動抓取物體的 \xa0 Python \xa0 程式 \n \n \n import sim import time # 定義物體的名稱和位置 \n object_name = 'Cuboid' object_position = [-0.2, 0.5, 0.1] # 連接 CoppeliaSim sim.simxFinish(-1) clientID = sim.simxStart('127.0.0.1', 19999, True, True, 5000, 5)  \n if clientID != -1: print('Connected to remote API server') # 取得機械臂控制句柄 \n errorCode, robot_handle = sim.simxGetObjectHandle(clientID, 'UR3', sim.simx_opmode_blocking) # 取得物體控制句柄 \n errorCode, object_handle = sim.simxGetObjectHandle(clientID, object_name, sim.simx_opmode_blocking) # 移動機械臂到指定位置 \n target_position = [-0.2, 0.5, 0.2] sim.simxSetObjectPosition(clientID, robot_handle, -1, target_position, sim.simx_opmode_blocking) # 機械臂夾取物體 sim.simxSetObjectParent(clientID, object_handle, robot_handle, True, sim.simx_opmode_blocking) # 移動機械臂到指定位置 \n sim.simxSetObjectPosition(clientID, robot_handle, -1, object_position, sim.simx_opmode_blocking) # 釋放夾爪 \n sim.simxSetObjectParent(clientID, object_handle, -1, True, sim.simx_opmode_blocking) # 移動機械臂到指定位置 \n sim.simxSetObjectPosition(clientID, robot_handle, -1, target_position, sim.simx_opmode_blocking) # 斷開與 CoppeliaSim 的連接 \n sim.simxFinish(clientID) else: print('Failed connecting to remote API server') time.sleep(1) \n \n \n \n \n \n \n \n", 'tags': '', 'url': 'w10-2.html'}, {'title': 'Note', 'text': '', 'tags': '', 'url': 'Note.html'}, {'title': 'stud2.cycu.org', 'text': 'step 1：Login to https://mail.nfu.edu.tw - 查看登入 stud2.cycu.org 伺服器的密碼, 帳號為 cd+學號, 密碼為四個字元, 包括數字與小寫英文字母，並查詢 stud.cycu.org 中與帳號對應的近端 (給 127.0.0.1 使用, 9 開頭的 port) 與遠端 (給 stud.cycu.org, 8 開頭的 port) 埠號 step 2：修改可攜 Python 3.10.6 start.bat, 蓋掉第三行後重新啟動, 目的希望將操作系統的命令搜尋路徑放在可攜目錄搜尋路徑之後. step 3：重新啟動可攜程式環境, 在其中一個命令列, ssh\xa0 cd+學號@stud2.cycu.org, 表示要使用 secure shell 遠端登入到 stud2.cycu.org, 這是一台 Linux 主機, 安裝 Ubuntu 22.04 Server.(若使用的網路連線協定並無 IPv6,\xa0 可將系統的 proxy 設為 140.130.17.4:3128 kmolab/kmolab) step 4：在 ssh 登入畫面, 以 ssh-keygen 建立 key pairs, .ssh/id_rsa 為 private key, id_rsa.pub 為 public key step 5：設法利用 Filezilla, 以 sftp 安全的(Secure)檔案(File)傳輸(Transmission)協定(Protocol), 與 stud.cycu.org 伺服器連結. step 6：利用\xa0 Filezilla sftp 取下 id_rsa.pub, 登錄至 Github 帳號下的 Setting - >\xa0 SSH and GPG keys. step 7：對 server sftp 也可以利用\xa0 Filezilla portable, 以圖形介面完成. 而 ssh 也可以透過\xa0 putty.exe 執行遠端登入. step 8：接下來要下載\xa0 config 設定檔案,\xa0 以 sftp 放入 stud2.cycu.org 主機的 .ssh 目錄中. step 9：接下來要在\xa0 Ubuntu (也就是 stud.cycu.org 這台主機所安裝的操作系統) 中, 設定 .gitconfig, 總共包含三項設定: git config --global user.name "scrum-1", git config --global user.email\xa0 "scrum1@mde.tw"\xa0\xa0 以及 git config --global http.proxy http://p42.cycu.org:3128, 這三個設定必須在 ssh 登入畫面中執行, 設定完成檔案會存入帳號根目錄中的 .gitconfig \xa0 step 10：接著下載 server.py, 在 Windows 編輯 server.py, 將個人分配到的 9xxxx 埠號填入後存檔, 以 sftp 放入上列取下的倉儲根目錄. 會使用的指令： pwd 代表 print working directory, clear - 清除螢幕 cd - 更換目錄 ls -l - 列出目錄詳細內容 chmod u+x acp - 表示讓 user 可以 execute acp script (能夠讓使用者以 source acp 加上提交字串進行 git add, git commit, git push, 如何在 Windows 執行 acp.bat 加上提交字串. ps axo pid,comm,user | grep "python3" - 表示要找出使用 python3 執行的 process, 列出其 process id, command 以及 user kill -9 - 移除 python3 執行的 process id \n 參考2a2-pj2ag2 \n \n \n', 'tags': '', 'url': 'stud2.cycu.org.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n \n', 'tags': '', 'url': 'Brython.html'}, {'title': 'Brython_ex2', 'text': 'This code uses the Euler method to approximate the solution to the ODE dy/dx = x - y with an initial condition of y0 = 1.0. The solution is calculated for a range of x values from 0 to 5. \n \n \n \n \n Solve ODE: \n from browser import document\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new paragraph element and set its text content to the solution\np = document.createElement(\'p\')\np.textContent = f"The solution to the ODE is: {y}"\n\n# Append the paragraph element to the body of the webpage\ndocument.body.appendChild(p) \n \n \n \n \n \n Brython environment and  Plotly.js : \n <script src="./../cmsimde/static/brython.js"></script>\n<script src="./../cmsimde/static/brython_stdlib.js"></script>\n<script>// <![CDATA[\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\']});\n}\n// ]]></script>\n<p id="brython_div"></p> \n Brython programe with Plotly.js: \n from browser import document, window\n\ndef dy_dx(y, x):\n    return x - y\n\nx_start = 0\nx_end = 5\nn_points = 100\nx = [x_start + i * (x_end - x_start) / (n_points - 1) for i in range(n_points)]\ny0 = 1.0\nh = x[1] - x[0]\ny = [y0]\nfor i in range(1, len(x)):\n    y.append(y[-1] + h * dy_dx(y[-1], x[i-1]))\n\n# Create a new div element to hold the plot\n#plot_div = document.createElement(\'div\')\n#plot_div.id = \'plot\'\n#document.body.appendChild(plot_div)\nplot_div = document["brython_div"]\n\n# Plot the solution using plotly.js\ndata = [{\'x\': x, \'y\': y}]\nwindow.Plotly.newPlot(\'brython_div\', data) \n This code defines a function dy_dx that represents the mass-spring-damper ordinary differential equation. The Euler method is used to solve this equation for a range of x values from 0 to 20 with initial conditions of y0 = [1.0, 0.0]. The solution is then plotted on the webpage using  plotly.js . \n \n \n This code defines a function dy_dx that represents the mass-spring-damper system with a PID controller. The gains of the PID controller are set to Kp = 10.0, Ki = 1.0, and Kd = 0.5. The Euler method is used to solve this system of equations for a range of x values from 0 to 20 with initial conditions of y0 = [0.0, 0.0, 0.0, 0.0]. The response of the system is then plotted on the webpage using  plotly.js . \n \n \n \n \n \n \n \n STL part viewer \n \n \n Using  sine-cosine algorithm  to optimize with constraints in Brython: \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n Plot the result by using  plotly.js : \n <!DOCTYPE html>\n<html>\n<head>\n    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython_stdlib"></script>\n    <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>\n</head>\n<body onload="brython()">\n\n<div id="output"></div>\n<div id="plot"></div>\n\n<script type="text/python">\nfrom browser import document\nfrom random import random, uniform\nfrom math import sin, cos, pi\n\n# Define the objective function\ndef objective_function(x):\n    return x[0]**2 + x[1]**2\n\n# Define the constraint functions\ndef constraint1(x):\n    return x[0] + x[1] - 2\n\ndef constraint2(x):\n    return 1 - x[0] - x[1]\n\n# Define the penalty function\ndef penalty_function(x):\n    penalty = 0\n    if constraint1(x) > 0:\n        penalty += constraint1(x)\n    if constraint2(x) > 0:\n        penalty += constraint2(x)\n    return penalty\n\n# Define the fitness function\ndef fitness_function(x):\n    return objective_function(x) + penalty_function(x)\n\n# Define the sine cosine algorithm\ndef sine_cosine_algorithm(fitness_function, dimension, lower_bound, upper_bound, population_size, max_iterations):\n    # Initialize the population\n    population = [[uniform(lower_bound, upper_bound) for _ in range(dimension)] for _ in range(population_size)]\n    population_fitness = [fitness_function(individual) for individual in population]\n\n    # Initialize the best solution\n    best_solution = population[0]\n    best_fitness = population_fitness[0]\n\n    # Main loop of the algorithm\n    for iteration in range(max_iterations):\n        # Calculate the value of a and r1\n        a = 2 - iteration * (2 / max_iterations)\n        r1 = 2 * pi * random()\n\n        # Update the population\n        for i in range(population_size):\n            # Calculate the value of r2, r3 and r4\n            r2 = 2 * random()\n            r3 = 2 * random()\n            r4 = random()\n\n            # Update the individual\n            for j in range(dimension):\n                if r4 < 0.5:\n                    population[i][j] += r1 * sin(r2) * abs(r3 * best_solution[j] - population[i][j])\n                else:\n                    population[i][j] += r1 * cos(r2) * abs(r3 * best_solution[j] - population[i][j])\n\n                # Make sure the individual is within the bounds\n                if population[i][j] < lower_bound:\n                    population[i][j] = lower_bound\n                elif population[i][j] > upper_bound:\n                    population[i][j] = upper_bound\n\n            # Calculate the fitness of the individual\n            population_fitness[i] = fitness_function(population[i])\n\n            # Update the best solution\n            if population_fitness[i] < best_fitness:\n                best_solution = population[i]\n                best_fitness = population_fitness[i]\n\n        # Print the current iteration and best fitness\n        print(f\'Iteration: {iteration + 1}, Best Fitness: {best_fitness:.6f}\')\n\n    return best_solution\n\n# Run the sine cosine algorithm to solve the optimization problem with constraints\nbest_solution = sine_cosine_algorithm(fitness_function, dimension=2, lower_bound=-10, upper_bound=10, population_size=50, max_iterations=100)\n\n# Print the result\noutput_div = document[\'output\']\noutput_div.text = f\'Best Solution: {best_solution}\'\n\n# Plot the result using Plotly.js\ndata = [\n    {\n        \'x\': [best_solution[0]],\n        \'y\': [best_solution[1]],\n        \'mode\': \'markers\',\n        \'marker\': {\'size\': 12},\n        \'name\': \'Best Solution\'\n    }\n]\n\nlayout = {\n    \'xaxis\': {\'range\': [-10, 10]},\n    \'yaxis\': {\'range\': [-10, 10]},\n}\n\nPlotly.newPlot(\'plot\', data, layout)\n</script>\n\n<script src="https://cdn.jsdelivr.net/npm/brython@3/dist/brython"></script>\n</body>\n</html> \n', 'tags': '', 'url': 'Brython_ex2.html'}]};