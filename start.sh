#!/bin/bash

cd app && mosca -v --http-port 3000 --http-bundle --http-static ./ | bunyan
