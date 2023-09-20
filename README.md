# Question 1(Javascript)
[Solution 1](./solution1.js)

You are given a list of names of new employees in a company. You need to generate a company email address for each of them.

The name of each person consists of two or three parts: a first name, an optional middle name, and a last name, separated by spaces. Each part can include only English letters (but the last name may additionally contain hyphens). The name of the company also consists only of English letters.

Each address must use the format "FirstMiddleLast@Company.com" where
First is the initial of the first name,

Middle is the initial of the middle name (but only if the person has a middle name),
Last is the last name, truncated to at most 8 initial letters,
Company is the company name.

The address should be in lower case and should not contain hyphens.

Note that hyphens should be removed before truncating the last name.

Additionally, if more than one person would have the same email address, differentiate their addresses by adding subsequent integers (starting from the second address and number 2) before the "@" sign. For example, if there are three people who would have the address "jd@company.com", they should be assigned addresses "jd@company.com", "jd2@company.com" and "jd3@company.com" respectively.
## Write a function:

### function solution(S, C);
that, given a string S containing a list of names separated by the characters ", "
(a comma followed by a space)
and a string C specifying the name of the company, returns a string containing the list of email addresses separated by the characters ", " in the same order as they were in the input. Each entry on the list should be of the form "Name <Email>".
For example, given C = "Example" and string S as follows:

"John Doe, Peter Parker, Mary Jane Watson-Parker, James Doe, John Elvis Doe, Jane Doe, Penny Parker"

the function should return:

"John Doe <jdoe@example.com>, Peter Parker <pparker@example.com>, Mary Jane Watson-Parker <mjwatsonpa@example.com>, James Doe <jdoe2@example.com>, John Elvis Doe <jedoe@example.com>, Jane Doe <jdoe3@example.com>, Penny Parker <pparker2@example.com>".

### Assume that:
- the length of string S is within the range [3..1,000];
- the length of string C is within the range [1..100];
- string S consists only of letters (a−z and/or A−Z), spaces, hyphens and commas;
- string S contains valid names; no name appears more than once;
- string C is made only of letters (a−z and/or A−Z).

In your solution, focus on correctness. The performance of your solution will not be the focus of the assessment.

# Question 2

[Solution](./solution2.js)

You are given an array S consisting of N strings. Every string is of the same length M.

 Your task is to find a pair of strings in array S, such that there exists a position in which both of the strings have the same letter. Both the index in array S and the positions in the strings are numbered from zero.

For example, given S = ["abc", "bca", "dbe"], string 0 ("abc") and string 2 ("dbe") have the same letter 'b' in position 1. On the other hand, for strings "abc" and "bca" there does not exist a position in which they have the same letter.

## Write a function:
### function solution(S);

that, given a zero-indexed array S of N strings, returns an array describing a pair of strings from S which share a common letter at some index. If there is no such pair, the function should return an empty array. If there is more than one correct answer, the function can return any of them.

The result should be represented as an array containing three integers. The first two integers are the indexes in S of the strings belonging to the pair. The third integer is the position of the common letter.

For S = ["abc", "bca", "dbe"], as above, the result array should be represented as [0, 2, 1]. Another correct answer is [2, 0, 1], as the order of indexes of strings does not matter.

### Examples:
1. Given: S = ["abc", "bca", "dbe"], your function may return [0, 2, 1] as described above.

2. Given: S = ["zzzz", "ferz", "zdsr", "fgtd"], your function may return [0, 1, 3]. Both "zzzz" and "ferz" have 'z' in position 3. The function may also return [1, 3, 0], which would reflect strings "ferz", "fgtd" and letter 'f'.

3. Given A = ["gr", "sd", "rg"], your function should return []. There is no pair of strings that fulfills the criteria.

4. Given A = ["bdafg", "ceagi"], your function may return [0, 1, 2].

Write an efficient algorithm for the following assumptions:

- N is an integer within the range [1..30,000];
- M is an integer within the range [1..2,000];
- each element of S consists only of lowercase English letters (a-z);
- N * M ≤ 30,000.

# Question 3(Ruby)

There are N hospitals, numbered from 0 to N−1.

 You are given a schedule of work in each of the hospitals for the following M days.
 
  The schedule is provided in the form of a two-dimensional array A containing N rows, each row representing the schedule of one hospital, and M columns, each column representing one day.
  
   Integer A[K][L] (for K within the range [0..N−1] and L within the range [0..M−1]) represents the ID of the doctor working at hospital K on day L.
   
    Note that sometimes an individual doctor may work at more than one hospital even on the same day.

## Write a function:
### def solution(a)

that, given a matrix A consisting of N rows and M columns representing the hospitals' schedules, finds the number of doctors working at more than one hospital.

### Examples:

1. Given A = [ [1, 2, 2], [3, 1, 4] ], the function should return 1.

The doctor with ID 1 works at both hospitals. The doctor with ID 2 works only at hospital number 0, while the doctors with IDs 3 and 4 work only at hospital number 1.

2. Given A = [ [1, 1, 5, 2, 3], [4, 5, 6, 4, 3], [9, 4, 4, 1, 5] ], the function should return 4.

The doctors with IDs 1, 3, 4 and 5 work at more than one hospital.

3. Given A = [ [4, 3], [5, 5], [6, 2] ], the function should return 0.

Each doctor works only at one hospital.

Write an efficient algorithm for the following assumptions:

- N and M are integers within the range [1..1,000];
- each element of matrix A is an integer within the range [1..N*M].


