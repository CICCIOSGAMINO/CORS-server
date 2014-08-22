#!/usr/bin/env bash

# ./ the file for create the .gitignore node file for the git folder 
# chmod u+x <file.sh> to give the right access to the folder 

cat > .gitignore  << 'endmsg'

# adding the Node.js script to .gitignore file 
### Node ###
# Logs
logs
*.log

# Runtime data
pids
*.pid
*.seed

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Compiled binary addons (http://nodejs.org/api/addons.html)
build/Release

# Dependency directory
# Commenting this out is preferred by some people, see
# https://npmjs.org/doc/faq.html#Should-I-check-my-node_modules-folder-into-git
node_modules

# Users Environment Variables
.lock-wscript

endmsg
