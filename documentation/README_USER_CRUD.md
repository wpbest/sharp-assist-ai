# Firebase Data Connect - User CRUD Operations

## Overview
This document describes the Firebase Data Connect schema and operations for managing Users in your Angular application.

## Schema

### User Type
```graphql
type User @table(key: "userId") {
  userId: String!    # Unique identifier (maps to user_id in database)
  userName: String!  # User's name (maps to user_name in database)
}
```

## Files Created

### 1. `dataconnect/schema/schema.gql`
Defines the User data model with:
- `userId`: String (primary key, unique)
- `userName`: String (user's name)

### 2. `dataconnect/connector/fragments.gql`
Reusable fragment for User fields:
```graphql
fragment UserFields on User {
  userId
  userName
}
```

### 3. `dataconnect/connector/queries.gql`
Read operations:
- **listUsers**: Get all users
- **getUser**: Get a single user by ID
- **searchUsersByName**: Search users by name (partial match)

### 4. `dataconnect/connector/mutations.gql`
Write operations:
- **createUser**: Create a new user
- **updateUser**: Update a user's name
- **deleteUser**: Delete a user by ID

### 5. `dataconnect/connector/subscriptions.gql`
Real-time subscription operations (currently commented out for future implementation)

## Usage in Angular

### Import the SDK
```typescript
import { getDataConnect } from 'firebase/data-connect';
import { 
  listUsers, 
  getUser, 
  searchUsersByName,
  createUser,
  updateUser,
  deleteUser 
} from '@dataconnect/generated';
```

### Create a User
```typescript
async createNewUser(userId: string, userName: string) {
  try {
    const result = await createUser(getDataConnect(), { 
      userId, 
      userName 
    });
    console.log('User created:', result);
  } catch (error) {
    console.error('Error creating user:', error);
  }
}
```

### Read Operations

#### Get All Users
```typescript
async getAllUsers() {
  try {
    const result = await listUsers(getDataConnect());
    console.log('Users:', result.data.users);
    return result.data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
  }
}
```

#### Get Single User
```typescript
async getUserById(userId: string) {
  try {
    const result = await getUser(getDataConnect(), { userId });
    console.log('User:', result.data.user);
    return result.data.user;
  } catch (error) {
    console.error('Error fetching user:', error);
  }
}
```

#### Search Users
```typescript
async searchUsers(searchTerm: string) {
  try {
    const result = await searchUsersByName(getDataConnect(), { searchTerm });
    console.log('Search results:', result.data.users);
    return result.data.users;
  } catch (error) {
    console.error('Error searching users:', error);
  }
}
```

### Update a User
```typescript
async updateUserName(userId: string, userName: string) {
  try {
    const result = await updateUser(getDataConnect(), { 
      userId, 
      userName 
    });
    console.log('User updated:', result);
  } catch (error) {
    console.error('Error updating user:', error);
  }
}
```

### Delete a User
```typescript
async removeUser(userId: string) {
  try {
    const result = await deleteUser(getDataConnect(), { userId });
    console.log('User deleted:', result);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
}
```

## Authentication
All operations are currently set to **PUBLIC** access level (`@auth(level: PUBLIC)`). 

⚠️ **Important**: Before deploying to production, you should:
1. Configure proper authentication rules
2. Consider using `@auth(level: USER)` or custom auth rules
3. Validate user permissions on the backend

## Database Mapping
- GraphQL field names use camelCase (e.g., `userId`, `userName`)
- Database column names use snake_case (e.g., `user_id`, `user_name`)
- The `@col` directive handles this mapping automatically

## Next Steps

### 1. Initialize Firebase Data Connect in your app
```typescript
import { initializeApp } from 'firebase/app';
import { getDataConnect } from 'firebase/data-connect';

const firebaseConfig = {
  // your config
};

const app = initializeApp(firebaseConfig);
const dataConnect = getDataConnect(app, {
  connector: 'example',
  location: 'us-west4',
  service: 'sharp-assist-ai'
});
```

### 2. Create an Angular Service
Create a `user.service.ts` to encapsulate all user operations:

```typescript
import { Injectable } from '@angular/core';
import { getDataConnect } from 'firebase/data-connect';
import { 
  listUsers, 
  getUser, 
  searchUsersByName,
  createUser,
  updateUser,
  deleteUser 
} from '@dataconnect/generated';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  async getAllUsers() {
    const result = await listUsers(getDataConnect());
    return result.data.users;
  }
  
  async getUserById(userId: string) {
    const result = await getUser(getDataConnect(), { userId });
    return result.data.user;
  }
  
  async createUser(userId: string, userName: string) {
    return await createUser(getDataConnect(), { userId, userName });
  }
  
  async updateUser(userId: string, userName: string) {
    return await updateUser(getDataConnect(), { userId, userName });
  }
  
  async deleteUser(userId: string) {
    return await deleteUser(getDataConnect(), { userId });
  }
  
  async searchUsers(searchTerm: string) {
    const result = await searchUsersByName(getDataConnect(), { searchTerm });
    return result.data.users;
  }
}
```

### 3. Test with Emulator
```bash
firebase emulators:start
```

### 4. Deploy Schema
```bash
firebase deploy --only dataconnect
```

## Generated Files
The TypeScript SDK has been generated in:
- `src/dataconnect-generated/` - Contains all generated TypeScript types and functions

## Notes
- Subscriptions are prepared but currently commented out - uncomment in `subscriptions.gql` when ready to test real-time features
- The schema uses PostgreSQL as the backend database
- All operations return promises and should be used with async/await
