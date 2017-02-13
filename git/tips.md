# 代码库回滚

## 本地代码库回滚

1. 回滚到commit-id，将commit-id之后提交的commit都去除

  `git reset --hard commit-id`

2. 将最近3次的提交回滚

  `git reset --hard HEAD~3`

## 远程代码库回滚

> 原理：先将本地分支退回到某个commit，删除远程分支，再重新push本地分支

1. 检出需要回滚的分支

  `git checkout the_branch`

2. 获取该分支的最新代码

  `git pull`

3. 备份该分支

  `git branch the_branch_backup`

4. 把the_branch本地回滚到the_commit_id

  `git reset --hard the_commit_id`

5. 删除远程 the_branch

  `git push origin :the_branch`

6. 用回滚后的本地分支重新建立远程分支

  `git push origin the_branch`

7. 如果前面都成功了，删除备份分支

  `git push origin :the_branch_backup`
