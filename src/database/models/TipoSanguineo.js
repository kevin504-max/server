const { DataTypes, Model } = require('sequelize');

class TipoSanguineo extends Model {
    static init(sequelize) {
        return super.init({
            tipo: { 
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
            modelName: 'TipoSanguineo',
            tableName: 'tipos_sanguineos',
            timestamps: true
        });
    }
}

module.exports = TipoSanguineo;