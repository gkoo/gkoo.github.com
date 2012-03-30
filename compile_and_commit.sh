#!/bin/bash
lessc -x css/homepage.less > css/homepage.css
git add css/homepage.css
git commit
