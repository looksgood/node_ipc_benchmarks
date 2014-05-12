
# IPC Benchmarks

I wrote this code to test the most efficient IPC for node.js
From what I have gathered TCP seems to be the fastest



## Installation

```
$ git clone https://github.com/FLYBYME/node_ipc_benchmarks.git
$ cd node_ipc_benchmarks
$ npm install
```
## Run

```
$ node fork
```


## Output

```
  punt/master

  [44247 ops/s] [375001]

      min: 27,173 ops/s
     mean: 37,591 ops/s
   median: 38,461 ops/s
    total: 375,910 ops in 10s
  through: 9.18 mb/s

  axon/master

  [81967 ops/s] [785001]]

      min: 34,722 ops/s
     mean: 78,770 ops/s
   median: 81,967 ops/s
    total: 787,700 ops in 10s
  through: 19.23 mb/s

  udp/master

  [66666 ops/s] [780001]

      min: 43,103 ops/s
     mean: 78,295 ops/s
   median: 84,745 ops/s
    total: 783,037 ops in 10.001s
  through: 19.12 mb/s

  tcp/master

  [142857 ops/s] [1020001]

      min: 4,945 ops/s
     mean: 102,086 ops/s
   median: 138,888 ops/s
    total: 1,021,071 ops in 10.002s
  through: 24.92 mb/s

  ipc/master

  [66666 ops/s] [750001]

      min: 52,631 ops/s
     mean: 75,283 ops/s
   median: 74,626 ops/s
    total: 752,988 ops in 10.002s
  through: 18.38 mb/s

```