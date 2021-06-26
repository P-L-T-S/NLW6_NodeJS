import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AlterUseAddPassword1624570462227 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'Users',
			new TableColumn({
				name: 'password',
				type: 'varchar',
                default: '12345'
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropColumn('users', 'password');
	}
}
