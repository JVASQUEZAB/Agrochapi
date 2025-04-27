from rest_framework import serializers
from ..models.users import CustomUser, Role


#Serializers for Role model.
class RoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Role
        fields = ['id', 'name', 'hierarchy']



#Serializers for CustomUser model.
class CustomUserSerializer(serializers.ModelSerializer):
    role = RoleSerializer(read_only=True)
    role_id = serializers.PrimaryKeyRelatedField(
        queryset=Role.objects.all(),
        source='role',
        write_only=True
    )

    class Meta:
        model = CustomUser
        fields = [
            'id', 
            'dni',
            'first_name', 
            'last_name', 
            'email', 
            'role', 
            'is_active', 
            'is_staff', 
            'last_login', 
            'date_joined', 
            'photo'
        ]
        read_only_fields = ['last_login', 'date_joined']



class CustomUserCreateSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    role_id = serializers.PrimaryKeyRelatedField(
        queryset=Role.objects.all(),
        source='role',
        write_only=True
    )

    class Meta:
        model = CustomUser
        fields = [
            'dni', 
            'first_name', 
            'last_name', 
            'email', 
            'password'
            'role_id',
            'is_active',
            'photo'
        ]
        
    def create(self, validated_data):
        password = validated_data.pop('password')
        user = CustomUser(**validated_data)
        user.set_password(password)
        user.save()
        return user
    