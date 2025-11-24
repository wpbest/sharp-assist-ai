import { Component, inject } from '@angular/core';
import { DataConnect } from '@angular/fire/data-connect';
import { RouterOutlet } from '@angular/router';
import {
  executeMutation,
  executeQuery,
  mutationRef,
  queryRef,
} from 'firebase/data-connect';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sharp-assist-ai';
  private dataConnect = inject(DataConnect);

  ngOnInit() {
    this.insertUser('123456', 'Goran');
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
      const query = queryRef(this.dataConnect, 'ListUsers');
      const result = await executeQuery(query);
      console.log('Users fetched successfully:', result.data);
      return result.data;
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}
