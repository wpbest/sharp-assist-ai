import { Component, inject } from '@angular/core';
import { DataConnect } from '@angular/fire/data-connect';
import { RouterOutlet } from '@angular/router';
import {
  executeMutation,
  executeQuery,
  mutationRef,
  queryRef,
} from 'firebase/data-connect';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatTableModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sharp-assist-ai';
  private dataConnect = inject(DataConnect);

  users: any[] = [];
  userId: string = '';
  userName: string = '';
  displayedColumns: string[] = ['userId', 'userName', 'actions'];

  ngOnInit() {
    this.listUsers();
  }

  async insertUser(userId: string, userName: string) {
    try {
      const mutation = mutationRef(this.dataConnect, 'createUser', {
        userId,
        userName,
      });

      const result = await executeMutation(mutation);

      console.log('User inserted successfully:', result);
      this.listUsers(); // Refresh list
      return result.data;
    } catch (error: any) {
      if (error?.message?.includes('violates SQL unique constraint')) {
        console.log('User already exists, skipping insertion.');
        return null;
      }
      console.error('Error inserting user:', error);
      throw error;
    }
  }

  async listUsers() {
    try {
      const query = queryRef(this.dataConnect, 'listUsers');
      const result = await executeQuery(query);
      console.log('Users fetched successfully:', result.data);
      this.users = (result.data as any).users;
      return result.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }

  async deleteUser(userId: string) {
    try {
      const mutation = mutationRef(this.dataConnect, 'deleteUser', {
        userId,
      });

      const result = await executeMutation(mutation);

      console.log('User deleted successfully:', result);
      this.listUsers();
      return result.data;
    } catch (error) {
      console.error('Error deleting user:', error);
      throw error;
    }
  }

  async updateUser(userId: string, userName: string) {
    try {
      const mutation = mutationRef(this.dataConnect, 'updateUser', {
        userId,
        userName,
      });

      const result = await executeMutation(mutation);

      console.log('User updated successfully:', result);
      this.listUsers();
      return result.data;
    } catch (error) {
      console.error('Error updating user:', error);
      throw error;
    }
  }
}
