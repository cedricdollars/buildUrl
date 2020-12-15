
# Exerice 

The purpose of the exercise is to implement buildUrl() function, in order to build a proper URL from a specific data.

Data is an object which looks like this: 
{
    name: 'toto',
    timestamps: [
        1508349990,
        1508350000,
        1508357300,
    ]
}
- name can be string
- timestamps is an array of timestamps in seconds

The expect url looks like this : 
 https://server/record?name=<name>&duration=<duration>0s&median=<median>

 - name: should be the name given by data
 - duration: should be a label describing the duration between the oldest valid timestamp and the newest valid timestamp given by data
 - median: should be a label describing the duration between the oldest valid timestamp and the median valid timestamp

 The median is the value which divides a list in two halves.
 for example : 
 The median of [1,3,5] is 3
 The median of [1,2,3,3,45] is 3

 when the number of element is even, the median is the average of 2 values at middle of the list.
 for eg:
 The median of [1,1,3,5] is 2
 The median of [1,4,8,25] is 6

## Note: 
if the median is a decimal number, we will consider the lower integer value. For example with timestamp [1,2,5,6] we will consider median as 3 (and not 3.5)
