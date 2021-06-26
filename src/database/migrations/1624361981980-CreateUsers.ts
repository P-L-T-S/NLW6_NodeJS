import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1624361981980 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		// cria as tabelas
		await queryRunner.createTable(
			// passa as colunas da tabela
			new Table({
				name: 'Users',
				columns: [
					{
						name: 'id',
						type: 'uuid',
						isPrimary: true,
					},
					{
						name: 'name',
						type: 'varchar',
					},
					{
						name: 'email',
						type: 'varchar',
					},
					{
						name: 'admin',
						type: 'boolean',
						default: false,
					},
					{
						name: 'created_at',
						type: 'timestamp',
						default: 'now()',
					},
					{
						name: 'updated_at',
						type: 'timestamp',
						default: 'now()',
					},
				],
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		// exclui a tabela
		await queryRunner.dropTable('Users');
	}
}
