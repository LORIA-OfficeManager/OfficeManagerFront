export class Roles {
  public static guest = 'guest';
  public static user = 'user';
  public static leader = 'leader';
  public static admin = 'admin';

  public static above(input: string, min: string): boolean {
    return this.value(input) >= this.value(min);
  }

  private static value(role: string): number {
    return role === this.guest ? 0 :
      role === this.user ? 1 :
        role === this.leader ? 2 :
          role === this.admin ? 3 : -1;
  }
}
