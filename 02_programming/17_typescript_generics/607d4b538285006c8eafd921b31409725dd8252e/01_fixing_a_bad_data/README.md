# Fixing a bad data

## Context and objectives

You're using an external service that sends you an object, but its keys are just `a` and `b`. Because it's not relevant, you decide to transform this object into an array and throw away those damn keys.

## Overview

Let's make a `ReceivedObject` type, that feats the `receivedObject` you have.

Then, let's make a `transformObject` that takes a `receivedObject` as a parameter (that uses the type you just created) and returns an array filled with `receivedObject`'s values.
