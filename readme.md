####                              进制转换

* 十进制转二进制/二进制转十进制
  * 使用十进制的数除以2取其余数为（0或1），余数的排列顺序为从下往上。
  * 111 ==>  1x2^2(表示2的2次方)+1x2^1+1x2^0 = 7
* 十进制转五进制
  * 使用十进制的数除以5取其余数为（0~5），余数排列顺序为从下往上。
* 十进制小数转二进制/二进制小数转十进制
  * 将十进制小数部分依次乘以2取其整数部分，整数排列顺序为从上往下
    * 0.125  ==> 0.001
  * 将二进制小数部分从小数点右边的第一位起，分别乘以2^-1,2^-2......一次往下排列最后加起来。
    * 0.110100110 ==> 0.82421875

* 整数不为0的小数转换为二进制
  * 分别将整数和小数拆分出来进行转换（按照正常整数和小数进行转换）
    * 3.125 ==> 11.001
#### 常用命令行

* ls  -l -h -a
*   cat （在控制台查看文件的内容）
  * cat file1.txt file2.txt > ffiles.txt(将文件1和2拼接到files文件里面)

* split (拆分文件)

  * split  -b 5M  aa.pdf  (将aa.pdf文件以5M的大小拆分开来)

  * 拆分开的文件可以使用cat命令进行拼接还原

* which (可查询文件或者程序的路径)
* vi (命令行里面的编辑器)
  * i 进入编辑模式
  * esc 退出编辑模式
  * :wq 退出并保存

* mkdir (创建文件夹)
* rmdir (删除文件夹，只能删除空的文件夹)
* rm (删除文件)
  * rm  -r  aaa 递归删除(删除aaa文件夹及其里面的文件夹和文件)

* cp (复制)
  * cp a.txt ab (将a.txt文件复制到ab文件夹里面)
* mv (移动)
  * mv a,txt  ab  (将a.txt文件移动到ab文件夹里面)

* touch (创建文件/更新文件最后访问时间)
  * touch a.txt
* time command (计算某命令运行时间)
* date显示时间/cal显示日历
* alias (将命令重命名)
  * alias e="exit" (将exit命令重命名为e，可以使用e实现与exit相同的效果)

* curl (下载)
  * curl http://www.baidu.com -o a.html  (将百度网页下载到a.html的文件中)

#### git基本操作

* git init 初始化仓库，只需初始化一次
* git add file.txt  将创建或者编辑好的文件加载到等待提交
  * git add -p   可将文件的多处变更分段提交，git会提示你变更处是否提交
* git status    查看当前仓库状态
* git commit -m "对此版本的描述"  将等待提交的文件提交到仓库
  * 注意：每次改过文件内容后需要重新   git add 后，再进行  git commit -m
* git diff 查看文件编辑后与之前提交的文件的不同之处
* git log 查看提交历史

#### git代码提交至github

* git remote add gitee https://gitee.com/lizhaolu/learn-git-2021.git   (将远程地址起名为gitee使以后提交时不需要再输入地址)
  * git push gitee master    (将仓库里面已提交的文件上传至gitee)
  * git push -u gitee master   (将gitee与master分支绑定，之后直接使用git push 提交)
* git remote add github https://github.com/lizhaoluaccess/learn-git-2021.git   (同上)
  * git push github master

#### git remote 相关操作

* git remote -v   (查看git关联了几个仓库)
* git clone https://github.com/lizhaoluaccess/content.git  (将github上面的仓库拉到本地可进行与本地相同的操作)
* ssh-keygen (创建公私钥)
* git remote set-url  github git@github.com:lizhaoluaccess/content.git  (将之前github关联的地址重新设置为一个新的地址)
* git remote remove github   (删除github关联的地址，此处github为提交的名称)