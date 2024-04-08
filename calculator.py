def evaluate(expression):
    """
    Evaluate the arithmetic expression and return the result.
    The expression should only contain numbers and +, -, *, / operators.
    """
    try:
        # Evaluate the expression using Python's eval function.
        # Note: Using eval is generally unsafe, but for this controlled example, it's used for simplicity.
        # In a real-world scenario, consider using a safer evaluation method or a library.
        result = eval(expression)
        return result
    except Exception as e:
        # If there's an error in evaluation, raise an exception with the error message.
        raise Exception(f"Invalid expression: {expression}. Error: {str(e)}")

