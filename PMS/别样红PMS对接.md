# 别样红

## BeyondHost Open API Document

> 具体接口见文档`BeyondHost API_*.doc`

协议：SOAP

该协议在使用php实现时，需注意以下事项

1. 当对象为数组类型，但是元素个数仅为1时，该对象会返回元素，当个数大于一时，返回数组
2. 数据返回时会将对象类型作为结点返回
