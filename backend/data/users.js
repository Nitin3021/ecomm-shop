import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('124578', 10),
        isAdmin: true
    },
    {
        name: 'John Smith',
        email: 'john@example.com',
        password: bcrypt.hashSync('124578', 10)
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: bcrypt.hashSync('124578', 10)
    }
]

export default users