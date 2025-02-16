# Unexpected Null Behavior in JavaScript Function

This repository demonstrates a common JavaScript error related to null values. The original code lacks proper handling of null inputs, leading to unexpected null outputs. The corrected code addresses this issue by explicitly checking for and handling null values.

## Bug Description

The `foo` function attempts to add two numbers. However, it does not handle cases where one or both inputs are null.  This leads to a null return value, which might not be the desired behavior in all situations.

## Bug Solution

The solution involves adding an explicit check for null values at the beginning of the function. If either input is null, the function returns null.  If both inputs are valid numbers, it performs the addition as expected.