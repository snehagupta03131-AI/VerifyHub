from app.security.password import hash_password, verify_password

hashed = hash_password("Admin@123")

print("Generated Hash:")
print(hashed)

print("\nVerification Result:")
print(
    verify_password(
        "Admin@123",
        hashed
    )
)