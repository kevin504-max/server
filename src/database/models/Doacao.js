const { DataTypes, Model } = require('sequelize');

class Doacao extends Model {
    static init(sequelize) {
        return super.init({
            pessoa_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'pessoas',
                    key: 'id'
                }
            },
            local_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'locais_coleta',
                    key: 'id'
                }
            },
            data: {
                type: DataTypes.DATE,
                allowNull: false
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW
            }
        }, {
            sequelize,
            freezeTableName: true,
            modelName: 'Doacao',
            tableName: 'doacoes',
            timestamps: true
        });
    }
}

module.exports = Doacao;