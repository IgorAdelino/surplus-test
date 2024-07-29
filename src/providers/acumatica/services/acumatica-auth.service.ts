import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AcumaticaAuthService {
  private readonly baseUrl: string = process.env.ACUMATICA_BASE_URL;
  private readonly tenant: string = process.env.ACUMATICA_TENANT;
  public items: { name: string; password: string }[] = [];
  constructor() {}

  async authenticate({
    name,
    password,
  }: {
    name: string;
    password: string;
  }): Promise<{ status: number; headers: any; data: any }> {
    try {
      const body = {
        name,
        password,
        company: this.tenant,
      };
      const baseUrl = `${this.baseUrl}/entity/auth/login`;

      const response = await axios.post(baseUrl, JSON.stringify(body), {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 204) {
        return {
          status: response.status,
          headers: response.headers,
          data: response.data,
        };
      } else {
        console.log(response);
        throw new HttpException(
          'Authentication failed',
          HttpStatus.UNAUTHORIZED,
        );
      }
    } catch (error) {
      console.log(error);

      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }

  async authenticateInMemory({
    name,
    password,
  }: {
    name: string;
    password: string;
  }): Promise<{ status: number; headers: any; data: any }> {
    try {
      const user = this.items.find(
        (user) => user.name === name && user.password === password,
      );

      if (user) {
        const response = {
          status: 204,
          headers: {
            'Content-Type': 'application/json',
          },
          data: {},
        };

        return {
          status: response.status,
          headers: response.headers,
          data: response.data,
        };
      } else {
        throw new HttpException(
          'Authentication failed',
          HttpStatus.UNAUTHORIZED,
        );
      }
    } catch (error) {
      console.log(error);

      throw new HttpException(error.message, HttpStatus.UNAUTHORIZED);
    }
  }
}
