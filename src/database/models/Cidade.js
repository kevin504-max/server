const { DataTypes, Model } = require('sequelize');

class Cidade extends Model {
    static init(sequelize) {
        return super.init({
            nome: { 
                type: DataTypes.STRING, 
                allowNull: false 
            },
            estado_id: { 
                type: DataTypes.INTEGER, 
                allowNull: false,
                references: {
                    model: 'estados',
                    key: 'id'
                }
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
            modelName: 'Cidade',
            tableName: 'cidades',
            timestamps: true
        });
    }
}

module.exports = Cidade;