1. stream是Node.js提供的一个仅在服务区端可用的模块，目的是支持“流”这种数据结构。流的特点是数据是有序的，而且必须*依次读取，或者依次写入*，不能像Array那样随机定位。
2. pipe两个水管串成一个更长的水管，两个流也可以串起来，这样源文件的所有数据就能够自动写入到目标文件里了，实际上就是一个复制文件的程序。