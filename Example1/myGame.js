room = game.createRoom("room", "���-1.png") // �� ����
room.door = room.createObject("door", "��-������-����.png") // �� ����
room.door.setWidth(136) // ũ�� ����
room.locateObject(room.door, 1049, 300) // �� ��ġ
room.door.onClick = function() { // door�� Ŭ������ ��
if(room.door.isClosed()){ // door�� closed �����̸�
room.door.open() // door�� ���¸� open���� �ٲ�
} else if (room.door.isOpened()){ // door�� opened �����̸�
game.clear() // ���� Ŭ����
}
}
room.door.onOpen = function() { // door ���°� open���� ����Ǹ� ����
room.door.setSprite("��-������-����.png") // ���� ������ ����
}
game.start(room) // ���ӽ���
printMessage("��Ż�⿡ ���� ���� ȯ���մϴ�!") // ȯ�� �޽��� ���